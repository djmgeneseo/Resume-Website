import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/blogs/messapps/speaking-code-a-review-of-the-basics/1.png';
import img2 from '../../../../assets/img/blogs/messapps/speaking-code-a-review-of-the-basics/2.jpg';
import img3 from '../../../../assets/img/blogs/messapps/speaking-code-a-review-of-the-basics/3.jpg';
import img4 from '../../../../assets/img/blogs/messapps/speaking-code-a-review-of-the-basics/4.jpg';
import img5 from '../../../../assets/img/blogs/messapps/speaking-code-a-review-of-the-basics/5.jpg';
import img6 from '../../../../assets/img/blogs/messapps/speaking-code-a-review-of-the-basics/6.jpg';
import img7 from '../../../../assets/img/blogs/messapps/speaking-code-a-review-of-the-basics/7.jpg';
import img8 from '../../../../assets/img/blogs/messapps/speaking-code-a-review-of-the-basics/8.jpg';

const jssStyle = theme => ({
    img: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '30px',
      marginTop: '30px',
      maxWidth: '90%'
    },
    blockQuote: {
      background: '#f9f9f9',
      borderLeft: '10px solid #ccc',
      margin: '1.5em 10px !important',
      padding: '0.5em 10px',
      display: 'block',
      quotes: `'"''"''"''"'`,
      '&::before': {
        color: '#ccc',
        content: 'open-quote',
        fontSize: '4em',
        lineHeight: '0.1em',
        marginRight: '0.25em',
        verticalAlign: '-0.4em'
      }
    },
    center: {
        textAlign: 'center'
    }
})

const SpeakingCodeAReviewOfTheBasics = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography variant="h5" gutterBottom>Why is programming sometimes referred to as "Coding?"</Typography>
        <Typography paragraph>Because a programmer’s “source code” is like a set of instructions that the CPU ­(the Computer Processing Unit)­ cannot initially decipher. That’s why “higher” language (your source code)­ is oftentimes considered an “encoded” sequence of instruction for the CPU to read. The “higher” programming language that you choose ­(and there are many) is then translated from your source code into a “lower language.” This lower language is a form of input that your CPU can then register with the help of a compiler program.</Typography>
        <Typography variant="h5" gutterBottom>What's a Compiler?</Typography>
        <Typography paragraph>A compiler is essentially the middle­man between you and the CPU that’s included in a Software Development Kit. It takes all of the source code that you've written in a higher language and transposes it into a stream of numbers that the CPU can then read ­ machine code. As a rule of thumb, a program is compiled before it's run.</Typography>
        <Typography variant="h5" gutterBottom>What's an SDK?</Typography>
        <img src={img1} className={classes.img} alt='SDK illustration'/>
        <Typography className={classes.center} paragraph>Source: <ExternalLink url={`Cometchat.com`}>Cometchat.com</ExternalLink></Typography>
        <Typography paragraph>SDK stands for "Software Deveopment Kit," which is exactly what it sounds like: a package or "toolkit" of software that a programmer uses to create programs. This kit usually comes with an integrated programming language. Each kit contains compilers, debuggers, and any other facilities needed to develop apps for a specific platform. For the most part, it's highly uncommon to simply code using an SDK; it’s typically coupled with something called an Integrated Development Environment.</Typography>
        <Typography variant="h5" gutterBottom>What's an IDE?</Typography>
        <Typography paragraph>An IDE is an Integrated Development Environment that contains an SDK. Most IDEs are tailored to function around a particular SDK. An IDE’s purpose is to make coding with an SDK more manageable. What an IDE is to a programmer is essentially what an instrument is to a musician: although all instruments can play music, certain instruments allow a musician to express him or herself through a more desired/preferred format. Although all IDEs can be used while coding, one IDE and its included SDK might be preferred or even necessary for creating a program that is only compatible with a particular platform.</Typography>
        <Typography variant="h5" gutterBottom>Android and iOS IDEs</Typography>
        <Typography paragraph className={classes.center}><strong><ExternalLink url={`https://developer.android.com/docs/`}>Android Studio</ExternalLink></strong></Typography>
        <img src={img2} className={classes.img} alt='Android Studio interface screenshot'/>
        <Typography paragraph className={classes.center}><strong><ExternalLink url={`https://developer.apple.com/xcode/`}>Xcode</ExternalLink></strong></Typography>
        <img src={img3} className={classes.img} alt='Xcode interface screenshot'/>
        <Typography paragraph>Java, Swift, and Objective-­C are both programming languages used for coding Android and iOS apps respectively. Developers interested in developing apps for iOS devices should first familiarize themselves with the IDE called Xcode, which uses the iOS ­compatible language of Objective­-C and Swift. As for Android devices, Eclipse and Android Studio are both the go­to IDEs for coding in the Android­ compatible language of Java. This also means that Android devices cannot run apps that are coded in Objective­C and Swift, and an iOS device cannot run apps that are coded in Java. There are, however, a few up­and­coming IDEs which are considered cross­platform compatible, such as Xamarin.</Typography>
        <Typography variant="h5" gutterBottom>What is HTML and CSS?</Typography>
        <Typography paragraph>Both HTML (Hyper Text Markup Language) and CSS (Cascading Style Sheets) are programming languages that function in website development. HTML is used to structure a website with links, images, texts, videos and other “elements”; CSS is used in tandem with HTML to further stylize the layout of the webpage by re­arranging the colors, fonts, and positioning of HTML elements.</Typography>
        <Typography variant="h5" gutterBottom>What are the three main control structures of programming?</Typography>
        
        <Typography paragraph>
            <ol>
                <li>
                    <strong>Sequential Execution:</strong> Instructions in your source code that are compiled and executed in the same order as they appear. When ending a line of code, instead of using a ‘period’ mark like you normally might in English, you’ll be using a semicolon. After each semicolon, it is standard procedure to start the next instruction one line away from where the previous line ended. Check out the image below and notice how each instruction that's ended with a semicolon is followed by another on the next line. The instruction on line 57 begins at “font­family” and ends at the next semicolon, and a new instruction is created on line 58 in a similar fashion.
                    <img src={img4} className={classes.img} alt='CSS demonstration of key-value pairs'/>
                    <p className={classes.center}>*Written in CSS</p>
                    Some Languages don't assign the semicolon with this purpose, such as HTML and Python, but most do: Xcode, C++, Java, CSS, etc.
                </li>
                <br/>
                <li>
                    <strong>Conditional Statements:</strong> A more specialized instruction, known informally as the “if­-then” statement: <strong>if</strong> a certainconditionis met, <strong>then</strong> the included set of provided instructions will follow. In the image below, the phrase between the first parenthesis “(denom == 0 || num == 0)” is the conditional statement which, in this case, is testing whether or not the variable “denom” or the variable “num” is holding a value that is equal to 0. If it is, then the instruction below the conditional statement which is positioned between the two brackets are run, and the two variables are, again, set to the value of 0.
                    <img src={img5} className={classes.img} alt='C++ demonstration of an "if" statement'/>
                    <p className={classes.center}>*Written in C++</p>
                    Note: variables are assigned in C++ like so: "int denom = 0". "int" designates the variable "denom" as an integer, and "= 0" sets the variable "denom"'s value to 0. The variable can be changed at any time once it's created by typing the variable's name and resetting its value, such as the conditional statement does above: "denom = 0;".
                </li>
                <br/>
                <li>
                    <strong>Looping:</strong> Another specialized instruction, a looping statement is a sequence of instructions that is repeated until the specified condition is met. In the image below, the conditional statement is checking if the value inside of the variable ‘i’ is less than the value inside the variable ‘n.’ For every time the condition is NOT met, the loop will continue to repeat itself, starting with the conditional statement. That is, until the value inside of the variable “i” is greater than the value inside the variable ‘n’ ('n' is given a value at an earlier line in the source code), the loop will continue to run, and the instruction enclosed in brackets `cout .. a[i] .. " ";` (which displays a number into a seperate console window) will run once every time the loop’s condition is NOT satisfied. The phrase “i++” means that the value inside of the variable “i” is being increased by one whole integer each time the loop is run. Eventually, the value of the variable “i” will be greater than that of the variable “n,” and the instruction listed between the brackets will stop being triggered.
                    <img src={img6} className={classes.img} alt='C++ demonstration of a for loop'/>
                </li>
            </ol>
        </Typography>
        <Typography variant="h5" gutterBottom>What is a Queue vs a Stack (FIFO vs LIFO)?</Typography>
        <Typography paragraph>Both queues and stacks are ordered arrays (lists), meaning that the order of their contained variables is significant. Ordered arrays are useful tools to have for problem­-solving at all levels of coding.</Typography>
        <Typography paragraph>
            <ul>
                <li>
                    <strong>Queue:</strong> an array of variables in which the first variable (a phone­number, for instance) that is inputted into the array (a list of phone numbers) will also be the first variable that the queue will output when it's commanded to do so. The image below illustrates that concept through the similar notion of waiting at a line at the check­out isle: the first person on the line will be the first person to get their groceries checked out.
                    <img src={img7} className={classes.img} alt='illustration of a queue of individuals'/>
                    <p className={classes.center}>Source: <ExternalLink url='ucsd.edu'>ucsd.edu</ExternalLink></p>
                </li>
                <li>
                    <strong>Stack:</strong> an array (a list) of variables (phone numbers) in which the last variable to be inputted into the array is also the first variable that will be outputted. The image below illustrates how the entrance of the array is also its exit.
                    <img src={img8} className={classes.img} alt='illustration of a queue of individuals'/>
                    <p className={classes.center}>Source: <ExternalLink url='tutorialspoint.com'>tutorialspoint.com</ExternalLink></p>
                </li>
            </ul>
        </Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(SpeakingCodeAReviewOfTheBasics)