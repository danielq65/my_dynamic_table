/*
File: script.js
GUI Assignment: Homework #3
Daniel Quinonez, UMass Lowell Computer Science, daniel_quinonezrosario@student.uml.edu
Copyright (c) 2022 by Daniel. All rights reserved. May be freely copied or excerpted for educational purposes
with credit to the author.
Updated by DQ on November 1st, 2022
*/

function create_table() {
    let min_col = document.getElementById("minimum_column").value;
    let max_col = document.getElementById("maximum_column").value;
    let min_row = document.getElementById("minimum_row").value;
    let max_row = document.getElementById("maximum_row").value;

    // validate the number inputs first before proceeding to build the actual table
    let text;

    // validate the minimum column value
    if(isNaN(min_col) || min_col == "" || min_col == null) {
        text = "Please fill out this field with a number";
        document.getElementById("invalid_min_col").innerHTML = text;
        return false;
    }
    else if(min_col > 50) {
        text = "Invalid input. Please enter a number less than 50";
        document.getElementById("invalid_min_col").innerHTML = text;
        return false;
    }
    else if(min_col < -50) {
        text = "Invalid input. Please enter a number greater than -50";
        document.getElementById("invalid_min_col").innerHTML = text;
        return false;
    }
    else {
        document.getElementById("invalid_min_col").innerHTML = "";
    }

    // validate the maximum column value
    if(isNaN(max_col) || max_col == "" || max_col == null) {
        text = "Please fill out this field with a number";
        document.getElementById("invalid_max_col").innerHTML = text;
        return false;
    }
    else if(max_col > 50) {
        text = "Invalid input. Please enter a number less than 50";
        document.getElementById("invalid_max_col").innerHTML = text;
        return false;
    }
    else if(max_col < -50) {
        text = "Invalid input. Please enter a number greater than -50";
        document.getElementById("invalid_max_col").innerHTML = text;
        return false;
    }
    else if(max_col < min_col) {
        text = "Please enter a maximum column value greater than the minimum column value";
        document.getElementById("invalid_max_col").innerHTML = text;
        return false;
    }
    else {
        document.getElementById("invalid_max_col").innerHTML = "";
    }

    // validate minimum row value
    if(isNaN(min_row) || min_row == "" || min_row == null) {
        text = "Please fill out this field with a number";
        document.getElementById("invalid_min_row").innerHTML = text;
        return false;
    }
    else if(min_row > 50) {
        text = "Invalid input. Please enter a number less than 50";
        document.getElementById("invalid_min_row").innerHTML = text;
        return false;
    }
    else if(min_row < -50) {
        text = "Invalid input. Please enter a number greater than -50";
        document.getElementById("invalid_min_row").innerHTML = text;
        return false;
    }
    else {
        document.getElementById("invalid_min_row").innerHTML = "";
    }

    // validate maximum row value
    if(isNaN(max_row) || max_row == "" || max_row == null) {
        text = "Please fill out this field with a number";
        document.getElementById("invalid_max_row").innerHTML = text;
        return false;
    }
    else if(max_row > 50) {
        text = "Invalid input. Please enter a number less than 50";
        document.getElementById("invalid_max_row").innerHTML = text;
        return false;
    }
    else if(max_row < -50) {
        text = "Invalid input. Please enter a number greater than -50";
        document.getElementById("invalid_max_row").innerHTML = text;
        return false;
    }
    else if(max_row < min_row) {
        text = "Please enter a maximum row value greater than the minimum row value";
        document.getElementById("invalid_max_row").innerHTML = text;
        return false;
    }
    else {
        document.getElementById("invalid_max_row").innerHTML = "";
    }

    // if all validations are passed, then build the table
    var output = "<div id='my_table'><table>";
    var first_row = 1;

    // this loop handles the actual generation of my multiplication table
    for(i = min_row - 1; i <= max_row; i++) {
        output += "<tr>";
        
        // handles the creation of every row after the first row
        if(first_row == 0) {
            output += "<th class='table_header first_column'>" + i + "</th>";

            for(j = min_col; j <= max_col; j++) {
                output += "<td class='table_cell'>" + (i * j) + "</td>";
            }
        }
        
        // handles the creation of first row
        if(first_row == 1) {
            output += "<th class='first_cell'></th>";

            for(j = min_col; j <= max_col; j++) {
                output += "<th class='table_header first_row'>" + j + "</th>";
            }

            first_row = 0;
        }

        output += "</tr>";
    }
    
    output += "</table></div>";
    document.getElementById("mult_table").innerHTML = output;
}