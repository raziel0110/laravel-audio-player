<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    /**
     * Register a new user
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function register(Request $request)
    {
      $validator = Validator::make($request->all(), [
        'name'     => 'required',
        'email'    => 'required|email|unique:users,email',
        'password' => 'required'
      ]);


      $user = User::create([
        'name'     => $request->input('name'),
        'email'    => $request->input('email'),
        'password' => Hash::make($request->input('password'))
      ]);

      $token = $user->createToken('auth-token')->accessToken;

      return response()->json(['name' => $user->name, 'token' => $token], Response::HTTP_CREATED);
    }

    /**
     * Login a user to application
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function login(Request $request)
    {
      if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {
        $user = Auth::user();
        $success['token'] = $user->createToken('auth-token')->accessToken;
        $success['name']  = $user->name;

        return response()->json(['success' => $success, 'message' => 'Authenticated'], Response::HTTP_OK);
      } else {
        return response()->json(['message' => 'Unauthorized'], Response::HTTP_BAD_REQUEST);
      }
    }


    /**
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function logout(Request $request)
    {
      if (Auth::check()) {
        $request->user()->token()->revoke();

        return response()->json(['message' => 'Logged out!'], Response::HTTP_OK);
      }
    }
}
