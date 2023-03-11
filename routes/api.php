<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\RegisterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [RegisterController::class, 'login']);
Route::post('/logout', [RegisterController::class, 'logout']);

Route::middleware(['auth:api'])->group(function() {
  // add routes that only an user can access
});


Route::get('/tracks', [\App\Http\Controllers\AudioController::class, 'index']);
Route::post('/tracks', [\App\Http\Controllers\AudioController::class, 'store']);
Route::delete('/tracks/{audio}', [\App\Http\Controllers\AudioController::class, 'destroy']);


Route::post('/upload', [UploadController::class, 'upload']);
