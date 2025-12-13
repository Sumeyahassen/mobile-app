// lib/main.dart

import 'package:ethiopia_leader/providers/theme_provider.dart';
import 'package:ethiopia_leader/screens/home_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final prefs = await SharedPreferences.getInstance();
  final isDarkMode = prefs.getBool('isDarkMode') ?? false;
  runApp(MyApp(isDarkMode: isDarkMode));
}

class MyApp extends StatelessWidget {
  final bool isDarkMode;
  const MyApp({super.key, required this.isDarkMode});

  @override
  Widget build(BuildContext context) {
    return ScreenUtilInit(
      designSize: const Size(360, 690),
      minTextAdapt: true,
      splitScreenMode: true,
      builder: (_, child) {
        return ChangeNotifierProvider(
          create: (_) => ThemeProvider(isDarkMode),
          child: Consumer<ThemeProvider>(
            builder: (context, themeProvider, child) {
              return MaterialApp(
                title: 'Ethiopian Leaders',
                theme: ThemeData.light().copyWith(
                  primaryColor: Colors.green,
                  scaffoldBackgroundColor: Colors.white,
                ),
                darkTheme: ThemeData.dark().copyWith(
                  primaryColor: Colors.green[700],
                  scaffoldBackgroundColor: Colors.grey[900],
                ),
                themeMode: themeProvider.isDarkMode ? ThemeMode.dark : ThemeMode.light,
                home: const HomeScreen(),
              );
            },
          ),
        );
      },
    );
  }
}