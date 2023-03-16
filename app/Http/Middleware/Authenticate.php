<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Illuminate\Http\Response;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    public function handle($request, Closure $next, ...$guards)
    {
      if (auth('api')->check()) {
        $response = $next($request);

        $response->headers->set('Content-Type', 'application/json');

        return $response;
      } else {
        return response()->json(['message' => 'Unauthenticated'], Response::HTTP_UNAUTHORIZED);
      }
    }

}
