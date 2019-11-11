function validate(form)
{


	// clear out any prior stories on the page
	document.getElementById('story').innerHTML = '';
	// clear out any prior errors leftover from a previous run
	document.getElementById("noun1Error").innerHTML = '';
	document.getElementById("noun2Error").innerHTML = '';
	document.getElementById("ptverbError").innerHTML = '';
	document.getElementById("adverbError").innerHTML = '';
	document.getElementById("number1Error").innerHTML = '';
	// determine if there are any new errors
	errors = 0;
	errors += validateNoun1(form.noun1.value);
	errors += validateNoun2(form.noun2.value);
	errors += validatePtVerb(form.ptverb.value);
	errors += validateAdverb(form.adverb.value);
	errors += validateNumber(form.number1.value);

	// if no errors, print the story
	if (errors == 0)
	{
		completedStory = '';

		// create shorter variables from the form vars
		mynoun1 = form.noun1.value;
		mynoun2 = form.noun2.value;
		myptverb = form.ptverb.value;
		myadverb = form.adverb.value;
		mynumber1 = form.number1.value;

		// styling these vars
		mynoun1styled = '<span class="emphasis">' + mynoun1 + '</span>';
		mynoun2styled = '<span class="emphasis">' + mynoun2 + '</span>';
		myptverbstyled = '<span class="emphasis">' + myptverb + '</span>';
		myadverbstyled = '<span class="emphasis">' + myadverb + '</span>';
		mynumber1styled = '<span class="emphasis">' + mynumber1 + '</span>';

		// build a string of the finished story
		completedStory = "The " +
						mynoun1styled +
						" ran up the " +
						mynoun2styled +
						" and " +
						myptverbstyled +
						" very " +
						myadverbstyled +
						" " +
						mynumber1styled +
						" times!";

		// pop the story into the correct spot on the page
		document.getElementById('story').innerHTML = completedStory;
	}
}

function validateNoun1(field)
{
	if (field == '')
	{
		document.getElementById("noun1Error").innerHTML = 'Fill in a noun here!';
		return 1;
	}
	return 0;
}
function validateNoun2(field)
{
	if (field == '')
	{
		document.getElementById("noun2Error").innerHTML = 'Fill in a noun here!';
		return 1;
	}
	return 0;
}
function validatePtVerb(field)
{
	if (field == '')
	{
		document.getElementById("ptverbError").innerHTML = 'Fill in a verb here!';
		return 1;
	}
	return 0;
}
function validateAdverb(field)
{
	if (field == '')
	{
		document.getElementById("adverbError").innerHTML = 'Fill in an adverb here!';
		return 1;
	}
	else if (! /[a-zA-Z]ly/.test(field))
	{
		document.getElementById("adverbError").innerHTML = 'Adverbs end in -ly!';
		return 1;
	}
	return 0;
}
function validateNumber(field)
{
	// parseInt takes a string and tries to find a number in the start of it
	if ((field == '') || isNaN(parseInt(field)))
	{
		document.getElementById("number1Error").innerHTML = 'Fill in a number here!';
		return 1;
	}
	return 0;
}
