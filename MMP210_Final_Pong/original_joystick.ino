void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
pinMode(A0, INPUT_PULLUP);
pinMode(A1, INPUT_PULLUP);
pinMode(8, INPUT_PULLUP);
}

void loop() {
  // put your main code here, to run repeatedly:
Serial.print(analogRead(A0));
Serial.print("&");
Serial.print(analogRead(A1));
Serial.print("&");
Serial.println(digitalRead(8));

}
