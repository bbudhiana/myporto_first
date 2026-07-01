<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:2000',
        ]);

        $toEmail = config('app.contact_email', 'bana.budhiana@gmail.com');

        try {
            Mail::raw(
                "From: {$validated['name']} <{$validated['email']}>\n\n{$validated['message']}",
                function ($message) use ($validated, $toEmail) {
                    $message->to($toEmail)
                            ->subject("[Portfolio] {$validated['subject']}")
                            ->replyTo($validated['email'], $validated['name']);
                }
            );

            return response()->json(['success' => true, 'message' => 'Message sent successfully.']);
        } catch (\Exception $e) {
            Log::error('Contact form email failed: ' . $e->getMessage());
            return response()->json(['success' => false, 'message' => 'Failed to send message. Please try again later.'], 500);
        }
    }
}
