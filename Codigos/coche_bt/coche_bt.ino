#include <AFMotor.h>  // Importa la biblioteca Adafruit Motor Shield

AF_DCMotor motor1(1);  // Configura el motor 1 en el puerto M1
AF_DCMotor motor2(3);  // Configura el motor 2 en el puerto M3

char command;  // Variable para almacenar el comando recibido desde Bluetooth

void setup() {
  Serial.begin(9600);  // Inicia la comunicación serial
}

void loop(){
  if(Serial.available() > 0){  // Si hay datos disponibles en el puerto serial
    command = Serial.read();  // Lee el comando
    
    // Controla el motor 1 para avanzar y retroceder
    switch(command){
      case 'F':  // Avanzar
        motor1.setSpeed(255);
        motor1.run(FORWARD);
        break;
      case 'B':  // Retroceder
        motor1.setSpeed(255);
        motor1.run(BACKWARD);
        break;
    }

    // Controla el motor 2 para girar a la izquierda o derecha
    switch(command){
      case 'L':  // Girar a la izquierda
        motor2.setSpeed(255);
        motor2.run(FORWARD);
        break;
      case 'R':  // Girar a la derecha
        motor2.setSpeed(255);
        motor2.run(BACKWARD);
        break;
    }
    
    // Detiene ambos motores si se envía "S"
    if (command == 'S') {
      motor1.setSpeed(0);
      motor2.setSpeed(0);
      motor1.run(RELEASE);
      motor2.run(RELEASE);
    }
  }
}
