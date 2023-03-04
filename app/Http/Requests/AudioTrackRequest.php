<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AudioTrackRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'tracks'   => 'required',
            'tracks.*' =>  'required|mimes:mp3,wav'
        ];
    }

    /**
     * Get the messages in case if rules are not fulfilled.
     *
     * @return array<string, mixed>
     */
    public function messages()
    {
      return [
        'tracks'   => 'It should be selected at least one track',
        'tracks.*' => 'Please selected only audio files (mp3 or wav)'
      ];
    }
}
