define(['pipAPI', 'https://cdn.jsdelivr.net/gh/NBreunesse/AMP-example@main/qampTry4.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Psychedelic',  //Will be used in the user feedback 
				nameForLogging : 'Psychedelic', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'Psychedelics'}, 
					{word : 'Hallucinogen'}, 
					{word : 'LSD'}, 
					{word : 'Psilocybin'}, 
					{word : 'MDMA'},
					{word : 'Ketamine'}, 
					{word : 'Tripping'}, 
					{word : 'Shrooms'},
					{word : 'Ayahuasca'}, 
					{word : 'Psychonaut'},  
					{word : 'Peyote'}, 
					{word : 'Mescaline'},
					{word : 'DMT'},
					{word : 'XTC'},
					{word : 'Trip sitter'}]

			}, 
			{
				nameForFeedback : 'Control',  //Will be used in the user feedback 
				nameForLogging : 'Control', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'DZTL'}, 
					{word : 'MST'}, 
					{word : 'XML'}, 
					{word : 'DDG'}, 
					{word : 'Nexatrol'}, 
					{word : 'Proximacor'}, 
					{word : 'Floro centro'}, 
					{word : 'Allernova'}, 
					{word : 'Pulmovive'}, 
					{word : 'Virexilic'}, 
					{word : 'Dermaxinol'}, 
					{word : 'Tendolax'},
					{word : 'Cardioquell'},
					{word : 'Zylarx'},
					{word : 'Sinusolve'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{word : 'Umbrella'}, {word : 'Table'}, {word : 'Hammer'}]
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/ampImages'
		}
	});
});