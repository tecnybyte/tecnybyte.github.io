#include <Wire.h>

#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(34,16,2);
// El 34 depende de otros factores, revisar despues para la practica fisica.

int contAbajo = 0;
String frase;
int buzzer = 7;
int boton1 = 6;
int boton2 = 5;
int boton3 = 4;
int boton4 = 3;
int letraMorse[4];
int a[] ={100, 300};
String aLet = ".-";
int b[] ={300, 100, 100, 100};
String bLet = "-...";
int c[] ={300, 100, 300, 100};
String cLet = "-.-.";
int d[] ={300, 100, 100};
String dLet = "-..";
int e[] ={100};
String eLet = ".";
int f[] ={100, 100, 300, 100};
String fLet = "..-.";
int g[] ={300, 300, 100};
String gLet = "--.";
int h[] ={100, 100, 100, 100};
String hLet = "....";
int I[] ={100, 100};
String iLet = "..";
int j[] ={100, 300, 300, 300};
String jLet = ".---";
int k[] ={300, 100, 300};
String kLet = "-.-";
int l[] ={100, 300, 100, 100};
String lLet = ".-..";
int m[] ={300, 300};
String mLet = "--";
int n[] ={300, 100};
String nLet = "-.";
int o[] ={300, 300, 300};
String oLet = "---";
int p[] ={100, 300, 300, 100};
String pLet = ".--.";
int q[] ={300, 300, 100, 300};
String qLet = "--.-";
int r[] ={100, 300, 100};
String rLet = ".-.";
int s[] ={100, 100, 100};
String sLet = "...";
int t[] ={300};
String tLet = "-";
int u[] ={100, 100, 300};
String uLet = "..-";
int v[] ={100, 100, 100, 300};
String vLet = "...-";
int w[] ={100, 300, 300};
String wLet = ".--";
int x[] ={300, 100, 100, 300};
String xLet = "-..-";
int y[] ={300, 100, 300, 300};
String yLet = "-.--";
int z[] ={300, 300, 100, 100};
String zLet = "--..";

void setup() {
  pinMode(buzzer, OUTPUT);
  pinMode(boton1, INPUT);
  pinMode(boton2, INPUT);
  pinMode(boton3, INPUT);
  pinMode(boton4, INPUT);
  lcd.init();
  lcd.backlight();
  lcd.clear();
  Serial.begin(9600);
}

void loop() {
  int cont = 0;
  String letra;
  lcd.setCursor(0,0);
  while(cont<4){
    
  if(digitalRead(boton1)==HIGH){
    lcd.print(".");
    tone(buzzer, 500, 100);
    letraMorse[cont] = 100;
    letra += ".";
    cont += 1;
    
    delay(300);
    
  }
  else if(digitalRead(boton2)==HIGH){
    lcd.print("-");
    tone(buzzer, 500, 300);
    letraMorse[cont] = 300;
    letra += "-";
    cont += 1;
    delay(300);
  }
  else if((digitalRead(boton3)==HIGH)&& !letra.length()<1){
    tone(buzzer, 100, 200);
    delay(200);
    break;
    
  }
    else if((digitalRead(boton3)==HIGH)&& letra.length()<1){
    tone(buzzer, 100, 200);
    letra = " ";
    delay(200);
    break;
    
  }
    else if(digitalRead(boton4)==HIGH){
    tone(buzzer, 800, 200);
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor((contAbajo -= 1),1);
    lcd.print(" ");
    letra = "";
    delay(200);
    break;
    
  }
    else{
      delay(50);
    }
  }
  if(letra == aLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("A");
    contAbajo += 1;
  }
  else if(letra == bLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("B");
    contAbajo += 1;
  }
  else if(letra == cLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("C");
    contAbajo += 1;
  }
  else if(letra == dLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("D");
    contAbajo += 1;
  }
  else if(letra == eLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("E");
    contAbajo += 1;
  }
  else if(letra == fLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("F");
    contAbajo += 1;
  }
  else if(letra == gLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("G");
    contAbajo += 1;
  }
  else if(letra == hLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("H");
    contAbajo += 1;
  }
  else if(letra == iLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("I");
    contAbajo += 1;
  }
  else if(letra == jLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("J");
    contAbajo += 1;
  }
  else if(letra == kLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("K");
    contAbajo += 1;
  }
  else if(letra == lLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("L");
    contAbajo += 1;
  }
  else if(letra == mLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("M");
    contAbajo += 1;
  }
  else if(letra == nLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("N");
    contAbajo += 1;
  }
  else if(letra == oLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("O");
    contAbajo += 1;
  }
  else if(letra == pLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("P");
    contAbajo += 1;
  }
  else if(letra == qLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("Q");
    contAbajo += 1;
  }
  else if(letra == rLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("R");
    contAbajo += 1;
  }
  else if(letra == sLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("S");
    contAbajo += 1;
  }
  else if(letra == tLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("T");
    contAbajo += 1;
  }
  else if(letra == uLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("U");
    contAbajo += 1;
  }
  else if(letra == vLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("V");
    contAbajo += 1;
  }
  else if(letra == wLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("W");
    contAbajo += 1;
  }
  else if(letra == xLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("X");
    contAbajo += 1;
  }
  else if(letra == yLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("Y");
    contAbajo += 1;
  }
  else if(letra == zLet){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("Z");
    contAbajo += 1;
  }
  else if(letra == " "){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print(" ");
    contAbajo += 1;
  }
  else if(letra != ""){
    lcd.setCursor(0,0);
    lcd.print("     ");
    lcd.setCursor(contAbajo,1);
    lcd.print("ERROR");
    delay(200);
    lcd.setCursor(contAbajo,1);
    lcd.print("     ");
    contAbajo += 1;
  }
  
}

// este codigo me ayudo otra persona :)
