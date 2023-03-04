<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UploadController extends Controller
{

  public function upload(Request $request)
  {
    $chunk       = $request->file('chunk');
    $chunkNumber = $request->input('chunkNumber');
    $totalChunks = $request->input('totalChunks');
    $filename    = $request->input('filename');

    $chunkPath = storage_path("app/uploads/tmp/");
    $chunk->move($chunkPath, "part_" . $chunkNumber);

    if ($chunkNumber === $totalChunks) {
      $chunks   = array_diff(scandir($chunkPath), array('..','.'));
      $filePath = storage_path("app/uploads/" . $filename);
      $file     = fopen($filePath, 'wb');

      foreach ($chunks as $chunk) {
        fwrite($file, file_get_contents(storage_path("app/uploads/tmp/" . $chunk)));
        unlink(storage_path("app/uploads/tmp/" . $chunk));
      }

      fclose($file);
    }
  }

}
