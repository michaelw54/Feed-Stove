#pragma strict

function Start () {

}

function Update () {
	if ((Input.GetAxis("Horizontal") > 0) && this.gameObject.transform.position.x < 20){
		this.gameObject.transform.position.x += 2;
	}
	else if ((Input.GetAxis("Horizontal") < 0) && this.gameObject.transform.position.x > -20){
		this.gameObject.transform.position.x -= 2;
	}

	if ((Input.GetAxis("Vertical") > 0) && this.gameObject.transform.position.y < 15){
		this.gameObject.transform.position.y += 2;
	}
	else if ((Input.GetAxis("Vertical") < 0) && this.gameObject.transform.position.y > -9){
		this.gameObject.transform.position.y -= 2;
	}

}

function OnTriggerEnter2D (fruit : Collider2D) {
	if (fruit.gameObject.CompareTag("fruit")) {
		Destroy(fruit.gameObject);
		gameObject.Find("Score").GetComponent.<scorekeeper>().increase();
		Debug.Log("u goteem");
		}
	if (fruit.gameObject.CompareTag("poison")) {
		Destroy(fruit.gameObject);
		gameObject.Find("Score").GetComponent.<scorekeeper>().lives -= 1;
	}
}