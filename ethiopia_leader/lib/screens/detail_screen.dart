// lib/screens/detail_screen.dart
import 'package:flutter/material.dart';

import '../models/leader.dart';

class DetailScreen extends StatelessWidget {
  final Leader leader;
  const DetailScreen({super.key, required this.leader});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(leader.name)),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Text(
                'Work History',
                style: Theme.of(context).textTheme.headlineMedium,
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              child: Text(leader.workHistory),
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Text(
                'Full History',
                style: Theme.of(context).textTheme.headlineMedium,
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              child: Text(leader.fullHistory),
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Text(
                'Gallery',
                style: Theme.of(context).textTheme.headlineMedium,
              ),
            ),
            SizedBox(
              height: 200,
              child: ListView.builder(
                scrollDirection: Axis.horizontal,
                itemCount: leader.galleryImages.length,
                itemBuilder: (context, index) {
                  return Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Image.asset(
                      leader.galleryImages[index],
                      fit: BoxFit.cover,
                      width: 150,
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}