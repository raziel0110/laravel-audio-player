<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Audio
 *
 * @property int $id
 * @property string|null $track
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Audio newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Audio newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Audio query()
 * @method static \Illuminate\Database\Eloquent\Builder|Audio whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Audio whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Audio whereTrack($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Audio whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Audio extends Model
{
    use HasFactory;
    protected $fillable = ['track'];
}
