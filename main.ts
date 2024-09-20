/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mohammed Afheej
 * Created on: Sep 2024
 * This program displays the current temperature.
*/
let CurrentTemperature = input.temperature ()

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
    basic.showString("The current temperature is: " + CurrentTemperature)
})