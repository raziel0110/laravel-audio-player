<?php

namespace App\Http\Controllers;

use App\Http\Requests\AudioTrackRequest;
use App\Models\Audio;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AudioController extends Controller
{
  /**
   * @return JsonResponse
   */
  public function index()
    {
      $tracks = Audio::all();

      return response()->json(["status" => Response::HTTP_OK, "count" => count($tracks), "data" => $tracks]);
    }

  /**
   * @param AudioTrackRequest $request
   * @return JsonResponse
   */
  public function store(AudioTrackRequest $request): JsonResponse
  {
     if ($request->has('tracks')) {
       foreach ($request->file('tracks') as $track) {
         $filename = time().$track->getClientOriginalName();
         $track->move('uploads', $filename);

         Audio::create([
           'track' => $filename
         ]);
       }

       return response()->json(["status" => Response::HTTP_CREATED, "message" => "Track(s) uploaded"]);
     } else {
       return response()->json(["status" => Response::HTTP_BAD_REQUEST, "message" => "Something went wrong"]);
     }
  }

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
