import 'package:flutter/material.dart';

class TextDart extends StatefulWidget {
  const TextDart({ Key? key }) : super(key: key);

  @override
  _TextDartState createState() => _TextDartState();
}

class _TextDartState extends State<TextDart> {
  double _fontSiz=16.0;
  FontWeight _fontWeight=FontWeight.normal;
  TextAlign _textAlign=TextAlign.left;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: BackButton(),
        title: Center(
          child: Text("Text Widget"),
        )
      ),
      body: Container(
        padding: EdgeInsets.all(10),
        child: Column(
          children: [
            Card(
              child: 
              Padding(padding:EdgeInsetsGeometry.all(20),
              child: Column(
                children: [
                  Row(
                      children: [
                        Text("Font Size: "),
                        Expanded(
                          child:Slider(value: _fontSiz,
                          min: 12.0,
                          max: 32.0,
                           onChanged: (value)=>setState(() {
                             _fontSiz=value;
                           }),),
                          
                           ),
                           Text(_fontSiz.toInt().toString())
                      ],
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  Row(
                    children: [
                      Text("Weight : "),
                      DropdownButton<FontWeight>(
                        dropdownColor: Colors.amberAccent,
                        value: _fontWeight,
                        items:const[
                          DropdownMenuItem(
                            value:FontWeight.normal,
                            child: Text("Normal"),
                            ),
                            DropdownMenuItem(
                              value: FontWeight.bold,
                              child: Text("Bold")),
                              DropdownMenuItem(
                                value: FontWeight.w300,
                                child: Text("Light"))
                        ] , 
                        onChanged: (weight)=>setState(() {
                          _fontWeight=weight!;
                        }),),
                    ],
                  ),
                     Row(
                        children: [
                          
                          Text("Align : "),
                          DropdownButton(
                            value: _textAlign,
                            items: const
                            [
                              DropdownMenuItem(child: Text("Left"),
                              value: TextAlign.left,
                              ),
                              DropdownMenuItem(child: Text("Center"),
                              value: TextAlign.center,
                              ),
                              DropdownMenuItem(child: Text("Right"),
                              value: TextAlign.right,
                              )
                            ], onChanged: (align)=>setState(() {
                              _textAlign=align!;
                            }),)
                        ],
                      ),
                   

                ],
              ),
              ),
            )
          ],
        ),
      ),
    );
  }
}