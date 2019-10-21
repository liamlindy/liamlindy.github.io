/*
Liam Lindy Code for CSC371 Startup 2
*/
int inputPIN = D0;
int ledPin = D7;
int statePIR = LOW;
int result = 0;
int manager =1;
int led = D7;


int calibrateTime = 5000;

void setup()
{
  Particle.subscribe("Recieved", Good_Recieve, "370027001547343339383037");
}
void Good_Recieve(const char *event, const char *data)
{
  digitalWrite(led, HIGH);
  delay(1000);
  digitalWrite(led, LOW);
  delay(1000);
  digitalWrite(led, HIGH);
  delay(1000);
  digitalWrite(led, LOW);
  delay(1000);
  digitalWrite(led, HIGH);
  delay(1000);
  digitalWrite(led, LOW);
}
void loop()
{


  if ( calibrated() )
  {

    readTheSensor();


    reportTheData();
  }
}

void readPIR() {
  result = digitalRead(inputPIN);
}

bool calibrated() {
  return millis() - calibrateTime > 0;
}

void dataReporter() {


  if (result == HIGH) {

   manager = manager;
   Particle.publish("MyMotion", String(manager));
   delay(10000);
   }
   else if (statePIR == LOW) {
     myHandler = 0;
    }
}
