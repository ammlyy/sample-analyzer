# Sample Analyzer

This joint-project was developed for the Advanced Coding Tools & Methodologies and Computer Music- Representation and Models courses at the Politecnico of Milan.

## Introduction
We've been thinking about a possible idea for this project. We asked ourselves "what could help producers or musicians?" and we came up with this: dealing with samples.
We started from the idea that, even tidy people, will have loads of samples but no chance to filter them. The first approach was working with big datasets locally, but this wasn't the best option to implement on a web-based application. 
We therefore moved to a sample analyzer, that could allow the user to upload a sample and look for some useful information.

## Tools
The project exploits Typescript language, using the Vue framework. Music notation rendering is based on SVG created with VexFlow library.
The basic GUI components are provided by Vuetify.

## GUI
The interface is divided into two main tabs, one for rhythmical analysis and one for harmonic analysis.
In the sidebar, a sample loader is provided with a few offline examples (two drum breaks and two one-shot samples).
The user will have to decided what to do with the sample. Obviously looking for chord suggestion when a kick drum sample has been loaded will lead to some strange results.

## Harmonic analysis
### Spectrum presenter
Whenever producers or musicians use a sample, often they do not know much about its spectral content. Our tool provides a spectrum plot, both with logarithmic or linear axis.
A peak detection algorithm also tries to predict the pitch of the sample and plots the first harmonics.
![spectrum](/screenshots/spectrum.png)

### HPCP
Harmonic Pitch Class Profile (HPCP) is mostly used to detect the harmonic evolution in time of a polyphonic signal, mainly in chord detection systems. In our case, we considered the coefficients for representing the contribution of each semitone to the total sound. We plotted it in a bar chart using chart.js

### Overtones presenter
Vexflow is a powerful library for music notation. We converted the frequency maxima found in the spectrum into musical notes and reported them onto a three stacks stave ranging into three clefs: bass, alto and treble.
![overtones](/screenshots/overtones.png)

## Voicing suggestion
Voicings is the art of creating chords. 
Why a keyboard player should choose a chord over another? There are many reasons. The melodic direction of the piece, the personal taste, the music ensemble he's playing with (leave the space for the bass and avoid bass notes for example).
We created a simple engine based not on this factors but only on the harmonic content of the sample. This process is done for major, minor and dominant chords.
The resulting chords are then plotted again on a stave using VexFlow.
