// lib/screens/about_screen.dart
import 'package:flutter/material.dart';

class AboutScreen extends StatelessWidget {
  const AboutScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('About Developer')),
      body: const Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Developer: [Your Name]'),
            SizedBox(height: 16),
            Text('This app is developed to showcase top Ethiopian leaders and national anthems.'),
            // Add more info
          ],
        ),
      ),
    );
  }
}