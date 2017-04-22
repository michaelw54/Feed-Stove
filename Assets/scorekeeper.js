#pragma strict

import UnityEngine.UI;

public var score: int = 0;
public var lives: int;
public var scoretext: String;
private var watermelonecountdown: float = 0;
public var dedmelonecountdown: float = 0;
private var elapsed: float;

function Start () {
	lives = 3;
}

function Update () {

	elapsed = Time.realtimeSinceStartup;

	scoretext = "score: " + score.ToString();

	CheckforDeath();
	CheckforGameOver();

	if ((watermelonecountdown < 1) && (elapsed < 10)) {
		watermelonecountdown += Time.deltaTime;
	}
	else if ((watermelonecountdown < 0.5) && (elapsed > 10) && (elapsed < 20)){
		watermelonecountdown += Time.deltaTime;
	}
	else watermelonecountdown = 0;


	if (dedmelonecountdown < 3) {
		dedmelonecountdown += Time.deltaTime;
	}
	else dedmelonecountdown = 0;

	DifficultyAdjust();
}

function increase () {
	score++;
}

function OnGUI () {
	GUI.Box(new Rect(280, 10, 100, 30), scoretext);
}

function DifficultyAdjust () {
	if ((elapsed < 10) && (watermelonecountdown >= 1)) {
		Instantiate(gameObject.Find("watermelone"), Vector3((40 * (Random.value - 0.5)), 30.0, 0), Quaternion.identity);
	}
	else if ((elapsed > 10) && (watermelonecountdown >= 0.5)) {
		Instantiate(gameObject.Find("watermelone"), Vector3((40 * (Random.value - 0.5)), 30.0, 0), Quaternion.identity);
	}

	if (dedmelonecountdown >= 3) {
		Instantiate(gameObject.Find("dedmelone"), Vector3((40 * (Random.value - 0.5)), 30.0, 0), Quaternion.identity);
	}

}

function CheckforDeath () {
	var watermelones = gameObject.FindGameObjectsWithTag("fruit");
	for (var i = 0; i < watermelones.Length; i++) {
		var currentmelone = watermelones[i];
		if ((currentmelone.transform.position.y < -27) && (currentmelone.transform.position.x > -22)) {
			lives -= 1;
			Destroy(currentmelone);
			Debug.Log(lives);
		}
	}
}

function CheckforGameOver () {

	switch(lives) {
		case 2:
			if (gameObject.Find("stovelife1")){
				DestroyImmediate(gameObject.Find("stovelife1"));
			}
			break;
		case 1:
			if (gameObject.Find("stovelife2")){
				DestroyImmediate(gameObject.Find("stovelife2"));
			}
			break;
		case 0:
			SceneManagement.SceneManager.LoadScene("stove dies");
	}
}


