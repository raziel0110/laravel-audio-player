<?php

namespace App\Http\Controllers;

use App\Models\Audio;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\AudioTrackRequest;

class AudioController extends Controller
{
  /**
   * @return JsonResponse
   */
  public function index()
    {
      $tracks = Audio::all();

      return response()->json(["status" => 'OK', "count" => count($tracks), "data" => $tracks], 200);
    }

  /**
   * @param AudioTrackRequest $request
   * @return JsonResponse
   */
  public function store(AudioTrackRequest $request)
  {
    $chunk       = $request->file('chunk');
    $chunkNumber = $request->input('chunkNumber');
    $totalChunks = $request->input('totalChunks');
    $filename    = $request->input('filename');
    $extension   = $request->input('extension');

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

      Audio::create([
        'track' => $filename
      ]);

      return response()->json(['filename' => basename($filePath)], 201);
    }


    // dd(storage_path("app/uploads/" . $filename));

  }

  //  if ($request->has('tracks')) {
    //    foreach ($request->file('tracks') as $track) {
    //      $filename = time().$track->getClientOriginalName();
    //      $track->move('uploads', $filename);

    //      Audio::create([
    //        'track' => $filename
    //      ]);
    //    }

    //    return response()->json(["status" => Response::HTTP_CREATED, "message" => "Track(s) uploaded"]);
    //  } else {
    //    return response()->json(["status" => Response::HTTP_BAD_REQUEST, "message" => "Something went wrong"]);
    //  }

  /**
   * @param Audio $audio
   * @return JsonResponse
   */
  public function destroy(Audio $audio): JsonResponse
  {
      $audio->delete();

      return response()->json(['status' => Response::HTTP_OK, 'message' => 'Track deleted.']);
    }
}
