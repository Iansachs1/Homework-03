# Homework-03

## Pseudocode

variables: 

    password length, upper case characters, lower case characters, numbers, special characters

outcomes:

    create a password between 8 and 128 characters

    include lower case characters
    exclude lower case characters

    include UPPER case characters
    exclude UPPER case characters
    
    include numbers
    exclude numbers

    include special characters
    exclude special characters

pseudocode:

    create array containing all lower case letters
    create array containing all upper case letters
    create array containing all numbers
    create array containing all special characters
    create an emptry array that will represent the desired password length
    create an empty array that will contain all allowed characters defined by prompts

    create a function to set a password length between 8 and 128 characters

        define the password length variable in a prompt. parse as integer

        while the password length is less that 8 or greater than 128, send an alert that the input was invalid and resend the prompt to define password length

    create a function to create an array with all allowed character types
        confirm that the user wants the password to contain lower case, upper case, number, and special characters

        while not allowing the use of any characters, alert the user that the password must contain some type of characters and confirm the character options again

        if using lower case letters, add all array contents from lower case array to the allowed characters array
        
        if using upper case letters, add all array contents from upper case array to the allowed characters array

        if using numbers, add all array contents from number array to the allowed characters array

        if using special characters, add all array contents from special character array to the allowed characters array

    create a function to shuffle the contents of an array

    create a fucntion to write the password and display it in the text area

        call the set password length function

        call the allowed character type function

        create a loop that starts at index 0 and continues to loop so long as the index remains less than the defined password length
            shuffle the allowed password character array
            in the password text area in the html, take the current text and add the first option in the array


    set an event listener to run the write passsword function once the "generate password" button is clicked