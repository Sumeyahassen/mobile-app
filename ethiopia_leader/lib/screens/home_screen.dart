// lib/screens/home_screen.dart

import 'package:ethiopia_leader/data/leaders_data.dart';
import 'package:ethiopia_leader/models/leader.dart';
import 'package:ethiopia_leader/providers/theme_provider.dart';
import 'package:ethiopia_leader/screens/about_screen.dart';
import 'package:ethiopia_leader/screens/anthem_screen.dart';
import 'package:ethiopia_leader/screens/detail_screen.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final TextEditingController _searchController = TextEditingController();
  List<Leader> _filteredLeaders = leaders;

  void _filterLeaders(String query) {
    setState(() {
      _filteredLeaders = leaders
          .where((leader) => leader.name.toLowerCase().contains(query.toLowerCase()))
          .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    final themeProvider = Provider.of<ThemeProvider>(context);
    return Scaffold(
      appBar: AppBar(
        title: const Text('Top Ethiopian Leaders'),
        actions: [
          IconButton(
            icon: Icon(themeProvider.isDarkMode ? Icons.light_mode : Icons.dark_mode),
            onPressed: () {
              themeProvider.toggleTheme();
            },
          ),
        ],
      ),
      drawer: Drawer(
        child: ListView(
          children: [
            const DrawerHeader(
              child: Text('Menu'),
            ),
            ListTile(
              title: const Text('Home'),
              onTap: () => Navigator.pop(context),
            ),
            ListTile(
              title: const Text('Ethiopian Anthems'),
              onTap: () {
                Navigator.pop(context);
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const AnthemScreen()),
                );
              },
            ),
            ListTile(
              title: const Text('About Developer'),
              onTap: () {
                Navigator.pop(context);
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const AboutScreen()),
                );
              },
            ),
          ],
        ),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: TextField(
              controller: _searchController,
              decoration: const InputDecoration(
                labelText: 'Search by name',
                border: OutlineInputBorder(),
              ),
              onChanged: _filterLeaders,
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: _filteredLeaders.length,
              itemBuilder: (context, index) {
                final leader = _filteredLeaders[index];
                return Card(
                  margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                  child: ListTile(
                    leading: CircleAvatar(
                      backgroundImage: AssetImage(leader.galleryImages.first),
                    ),
                    title: Text(leader.name),
                    subtitle: Text(leader.workHistory),
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) => DetailScreen(leader: leader),
                        ),
                      );
                    },
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}