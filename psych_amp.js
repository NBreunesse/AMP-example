define(['pipAPI', 'https://cdn.jsdelivr.net/gh/NBreunesse/AMP-example@main/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Psychedelic',  //Will be used in the user feedback 
				nameForLogging : 'Psychedelic', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : '<div><p style="font-size:40px><br/>' + 'Psychedelics'}, 
					{word : 'Hallucinogen'}, 
					{word : 'LSD'}, 
					{word : 'Psilocybin'}, 
					{word : 'Mescaline'}, 
					{word : 'DMT'}, 
					{word : 'Ayahuasca'}, 
					{word : 'Ecstasy'}, 
					{word : 'Ketamine'}, 
					{word : 'Peyote'}, 
					{word : 'Psychonaut'}, 
					{word : 'Tripping'}]

			}, 
			{
				nameForFeedback : 'Control',  //Will be used in the user feedback 
				nameForLogging : 'Control', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'Antidepressant'}, 
					{word : 'Ritalin'}, 
					{word : 'Aspirin'}, 
					{word : 'Ibuprofen'}, 
					{word : 'Adderall'}, 
					{word : 'Oxycodon'}, 
					{word : 'Prozac'}, 
					{word : 'Lexapro'}, 
					{word : 'Wellbutrin'}, 
					{word : 'Zoloft'}, 
					{word : 'SSRI'}, 
					{word : 'Fluoxetine'}]
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
