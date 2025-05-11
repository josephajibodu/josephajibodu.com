<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

\Illuminate\Support\Facades\URL::defaults(['locale' => null]);


$domain = config('app.domain');
Route::domain("transform.$domain")->group(function () {
    Route::inertia('/', 'JsonTransformer');
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('apps/nigerian-recipe-app/privacy-policy', function () {
    return Inertia::render('Apps/Nigerian-Recipe/PrivacyPolicy');
})->name('nigerian-recipe-app.privacy-policy');


require __DIR__.'/auth.php';

