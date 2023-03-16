<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Log;

class LoggerMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        $log = [
          'URI' => $request->getUri(),
          'METHOD' => $request->getMethod(),
          'REQUEST_BODY' => $request->all(),
          'RESPONSE' => $response->getContent()
        ];

        Log::info(json_encode($log));

        return $response;
    }
}
