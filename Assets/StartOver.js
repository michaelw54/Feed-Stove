#pragma strict
var btntexture: Texture;

function Start () {

}

function Update () {

}

function OnGUI () {
	if (GUI.Button(Rect(175,100,200,200), btntexture))
		SceneManagement.SceneManager.LoadScene("Watermelone-catching");
}