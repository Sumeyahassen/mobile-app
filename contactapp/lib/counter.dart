import 'package:flutter/material.dart';

class Counter extends StatefulWidget {
  
  const Counter({ Key? key }) : super(key: key);
  

  @override
  _CounterState createState() => _CounterState();
}

class _CounterState extends State<Counter> {
     int count=0;
    void add(){
      setState(() {
        count++;
      });
    }
    void sub(){
      setState(() {
        count--;
      });
    }
    void reback(){
      setState(() {
        count=0;
      });
    }
  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(title: Text("Counter app"),),
      body: Container(
        child:Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text("Courent counter to count $count"),
            SizedBox(height: 10,),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
              
                IconButton(onPressed: add, icon: Icon(Icons.add),color: Colors.green,),
                SizedBox(width: 10,),
                IconButton(onPressed: reback, icon: Icon(Icons.recycling),color: Colors.yellow,),
                SizedBox(width: 10,),
                IconButton(onPressed: sub, icon: Icon(Icons.minimize),color: Colors.red, ),
                SizedBox(width: 10,),
              ],
            )
          ],
        ) ,
      ),
    );
  }
}