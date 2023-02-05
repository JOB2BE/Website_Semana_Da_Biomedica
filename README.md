# Guidelines -  Website_Semana_Da_Biomédica

### General 

1. Everything done should be compatible with any platform, regardless of screen size
2. First Instalation:
   1. Install: VsCode or other IDE; NodeJS (v16.13.1); git.
   2. Download repo from github
   3. Do `*cd .\frontend\*` or in unix systems `*cd /frontend*`
   4. Run in command line `*npm install*`
   5. Ignore Warnings ( ͡° ͜ʖ ͡°) you can now run the project
   6. To run the project do `*npx expo start -web*` or just `*npx expo start*` and then press `*w*`
3. Before starting to code, do a design in figma if none have been done for that feature, brainstorm with colleges. In the end present it to the group leader for review.
   1. It should be a design in concomitance with the overall website, mobile friendly and responsive, if not a second design is warranted for lower resolution screens.
4. When starting a new feature/task open a new branch from master, and start working there **ONLY**. When the feature apears to be finished open a pull request where the group leader will review the feature. If all is well the feature branch will be merged via pull request to master
5. `**DO NOT PUSH ANYTHING TO MASTER**`, unless it is an fix, called hotfix
6. `**IF THERE IS ANY PROBLEM WITH THE COMMIT CONFLICTS CONTACT THE GROUP LEADER, only he is allowed to delete commits, undo them, reset them**`, unless it is a merge conflict which should be taken care of by the collaborators
7. Everyone is allowed to add issues
8. Every review step is not only the group leader's task but everyone's
9. Most of what is done frontend wise is done by native-base go to their website and read documentation


### Repo

1. The Repo is divided into frontend and backend, this is to be respected
2. Images should be added to `*frontend/src/assets/images*` and not to the assets in `*frontend/*`
3. **THERE IS ONLY ONE FONT**(TextME), no more fonts are allowed
4. All new components should be placed in the component folder, under a subfolder of that type of component, for example a Card which displays info should be under `*src/components/info*`
5. If changes are to be done in the `*router folder, App.js, theme.js*`,**it has to be reviewed by the group leader**.
6. New libraries are installed, with a command such as `*npm install library*` or `*npx install library*`, **only by the permission of the group leader**
7. Changes to the .gitignore should be pettioned to the group leader.
8. The ammount of libraries **should allways be** the least possible
9. **No messing with: eslintignore, eslintrc.json, .prettierrc, app.json or package-lock.json file**.
10. Basically only work in the src folder


### Coding

#### Imports

1. Always import React, well mostly...
2. React Native components are imported through native-base **only** such as Text, Buttons, this is our ui library. **NOTHING IS IMPORTED THROUGH react-native**. To see examples and the props of those components go to their website https://docs.nativebase.io/.
3. Seldom compoenents come from react-native, an example is StyleSheet.
4. Multiple imports from the same source can be added by adding {} and in them adding all components added from that source

#### CSS

1. CSS should be kept to a bare minimum, and is **prohibited** to do any inline styling, unless reasonable. So styling should be defined in classes in styles variable
2. **Margin** is the devil, run from it at all costs, really...
3. All colours used como from `theme.js`, no new colours are allowed
4. New component styles are to be defined in the `theme.js` file. 
5. In terms of text I **strongly** beleive that no new more text compoenent styles are necessary beyond the possibilities in `theme.js`, this helps standardise text website wise
6. Most of what is done frontend wise is done by native-base go to their website and read documentation
7. Have fun!

#### Compoenents

1. The number of props should be kept to a bare minimum, props that are styling parameters should be avoided. **PROPS are for aspects of the component which will vary alot**, padding is not a reasonable prop for example.
2. Instead of declaring each prop one by one in the components' function, simply delcare `*props*` and then use `*props.text*`, *e.g*.
3. Don't define the components' dimension in the component, this is done in the page where the compoenent is used.
4. In terms of responsiveness, start using breaking points as conditionals for text and specific component dimensions, like beyond a specific breaking point (screen dimension) the text size decreases, this is automated by the various text possibilities in `theme.js`. 
5. Most of what is done frontend wise is done by native-base go to their website and read documentation, in terms of themeing, this is where most is explained, then you will understand that in 99% cases no more text themeing is necessary.
6. **All compoenents names start with a capital letter**
7. Buttons and all actions that are to be seen instantly by the user in the website, such as opening a drawer clicking a button whatever... Should be handled by state, to learn how to use state, read react documentation, this can be any react, or simply check the example in all placeholder pages
8. Placeholder pages were done in a long time ago they might  no correspond to our necessities as of now, adapt or creat new .js files for specific pages.
9. No two components or pages should have the same name.


#### Workflow

1. Open new feature branch
2. Depending on if it is a component or a full page, create or work in the appropriate file. If no .js file has been created for that feature create one yourself in the specific place.
3. Structure:


``
**IMPORTS**

import React from 'react';
import { useState } from 'react'; **Used in all types of React, hence it is the react source**
import { StyleSheet } from 'react-native'; **Example of react-native component**
import { Button, Text, View } from 'native-base'; **Example of native-base component**

export default function Feature(props) { **A way to define props**

**Styling inside the function**

	const styles = StyleSheet.create({  

		container: {
			backgroundColor: '#fff',
		},
	});
**State: [stateName, stateUpdateFunction] = initialStateValue, in this case a 0 so an int**
	const [counter, setCounter] = useState(0); 

	return (
**Using props but from native-base compoenents**
		<Stack style={styles.container} direction = {'row'} alignItems = {'center'} justifyContent = {'center'}>
**Using compoenent variables props, which change depending on the implementation of the component**
			<Text>props.text</Text>
**State updating by button clicking**
			<Button onPress={() => setCounter(counter + 1)}>Add +1 to counter</Button>
**Using compoenent variables props once more, independently of whether you did the compoenent or native-base's team props are simply variables of the component function which increases its customability**
			<Text>{props.bottomText}</Text>
		</Stack>
	);
}
``