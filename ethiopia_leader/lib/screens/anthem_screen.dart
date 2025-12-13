// lib/screens/anthem_screen.dart
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AnthemScreen extends StatelessWidget {
  const AnthemScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Ethiopian Anthems')),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _buildAnthemSection(
                context,
                'Imperial Anthem (Haile Selassie Era)',
                'ኢትዮጵያ ሆይ ደስ ይበልሽ\nበአምላክሽ ኃይል በንጉሥሽ\nተባብረዋል አርበኞችሽ\nአይነካም ከቶ ነጻነትሽ\n𝄆 ብርቱ ናቸውና ተራሮችሽ\nአትፈሪም ከጠላቶችሽ\nድል አድራጊው ንጉሳችን\nይኑርልን ለክብራችን 𝄇',
                'Ityoṗya hoy des ybelish\nBeämlakəš ḫayəl benguśəš\nTebabəräwal arbäñočəš\nÄynekam keto neṣanetəš\n𝄆 Bərtu načewna terarəčəš\nÄtəferim keṭelatočəš\nDəl adragiw ngusačən\nYnurələn lekəbračən 𝄇',
                'Ethiopia, be happy\nthanks to the power of God and your ruler.\nYour brave citizens are unanimous;\nyour freedom will never be touched,\n𝄆 As your mountains are defiant\nand your natives do not fear any enemy.\nLong live our victorious ruler\nto the glory of our country. 𝄇',
              ),
              const SizedBox(height: 32),
              _buildAnthemSection(
                context,
                'Derg Era Anthem',
                'ኢትዮጵያ ኢትዮጵያ ኢትዮጵያ ቅደሚ\nበኅብረሰባዊነት አብቢ ለምልሚ!\nቃል ኪዳን ገብተዋል ጀግኖች ልጆችሽ\nወንዞች ተራሮችሽ ድንግል መሬትሽ\nለኢትዮጵያ አንድነት ለነጻነትሽ\nመሥዋዕት ሊኾኑ ለክብር ለዝናሽ ።\nተራመጂ ወደፊት በጥበብ ጎዳና ።\nታጠቂ ለሥራ ላገር ብልጽግና ።\nየጀግኖች እናት ነሽ በልጆችሽ ኵሪ ።\nጠላቶችሽ ይጥፉ ለዘላለም ኑሪ!',
                'Ītyoṗya, Ītyoṗya, Ītyoṗya, qidämī\nbähibräsäbawīnnät, abbibī, lämlimī!\nQal kīdan gäbtäwal jägnotch lijotchishi,\nwänzotch tärarotchish dingil märetishi\nläĪtyoṗya andinnät länäşannätishi\nmäswait līhonu läkibir läzinnashi.\nTäramäji wädäfit bäṭibäbi godanna.\nTaṭäqī läsira lagär biliṣiginna!\nYäjägnotch innat näsh, bälijotchish kurī.\nṬälatotchish yiṭfu, läzälaläm nurī!',
                'Ethiopia, Ethiopia – Ethiopia, be first\nIn socialism – flourish, be fertile!\nYour brave sons have made a covenant,\nThat your rivers and mountains, your virgin land\nShould be a sacrifice for the unity of Ethiopia, for your freedom,\nTo your honour and renown!\nStrive forwards on the road of wisdom,\nGird yourself for the task, for the prosperity of the land.\nYou are the mother of heroes – be proud of your sons,\nMay your enemies perish – may you live forever!',
              ),
              const SizedBox(height: 32),
              _buildAnthemSection(
                context,
                'Current Anthem',
                'የዜግነት ክብር በኢትዮጵያችን ጸንቶ ፣\nታየ ሕዝባዊነት ዳር እስከዳር በርቶ ።\nለሰላም ፣ ለፍትህ ፣ ለሕዝቦች ነጻነት ፣\nበእኩልነት በፍቅር ቆመናል ባንድነት ።\nመሠረተ ጽኑ ሰብእናን ያልሻርን ፣\nሕዝቦች ነን ለሥራ በሥራ የኖርን ።\nድንቅ የባህል መድረክ ያኩሪ ቅርስ ባለቤት ፣\nየተፈጥሮ ጸጋ የጀግና ሕዝብ እናት ።\nእንጠብቅሻለን አለብን አደራ ፣\nኢትዮጵያችን ኑሪ እኛም ባንቺ እንኩራ ።',
                'Yäzégennät keber bä-Ityopp’yachen s’änto;\nTayyä hezbawinnät dar eskädar bärto.\nLäsälam läfeteh lähezboch näs’annät,\nBä’ekkulennät bäfeqer qomänal bandennät.\nMäsärätä s’enu säbe’enan yalsharen;\nHezboch nän läsera bäsera yänoren.\nDenq yäbahel mädräk yakuri qers baläbêt,\nYätäfät’ro s’ägga yäjägna hezb ennat;\nEnnet’äbbeqeshallän alläbben adära;\nItyopp’yachen nuri eññam banchi ennekura!',
                'Respect for citizenship is strong in our Ethiopia;\nNational pride is seen, shining from one side to another.\nFor peace, for justice, for the freedom of peoples,\nIn equality and in love we stand united.\nFirm of foundation, we do not dismiss humanness;\nWe are people who live through work.\nWonderful is the stage of tradition, owners of a proud heritage,\nNatural grace, mother of a valorous people.\nWe shall protect you – we have a duty;\nOur Ethiopia, live! And let us be proud of you!',
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildAnthemSection(
    BuildContext context,
    String title,
    String amharic,
    String romanized,
    String english,
  ) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: Theme.of(context).textTheme.headlineMedium,
        ),
        const SizedBox(height: 8),
        Text(
          'Amharic:',
          style: Theme.of(context).textTheme.titleMedium,
        ),
        Text(
          amharic,
          style: GoogleFonts.getFont('Abyssinica SIL', fontSize: 16),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 16),
        Text(
          'Romanized:',
          style: Theme.of(context).textTheme.titleMedium,
        ),
        Text(
          romanized,
          style: const TextStyle(fontSize: 16),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 16),
        Text(
          'English Translation:',
          style: Theme.of(context).textTheme.titleMedium,
        ),
        Text(
          english,
          style: const TextStyle(fontSize: 16),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }
}