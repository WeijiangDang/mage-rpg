#pragma strict
var MoveSpeed = 5;
var RotateSpeed = 50;
var bullitPrefab:Transform;

function Update()
{
	if(Input.GetKey(KeyCode.W))
	{
		this.transform.Translate(Vector3.forward * Time.deltaTime * MoveSpeed);
	}
	if(Input.GetKey(KeyCode.S))
	{
		this.transform.Translate(Vector3.forward * Time.deltaTime * -MoveSpeed);
	}
	if(Input.GetKey(KeyCode.A))
	{
		this.transform.Rotate(Vector3.up * Time.deltaTime * -RotateSpeed);
	}
	if(Input.GetKey(KeyCode.D))
	{
		this.transform.Rotate(Vector3.up * Time.deltaTime * RotateSpeed);
	}
	
	if(Input.GetButtonDown("Jump"))
	{
		var bullit = Instantiate(bullitPrefab, 
								GameObject.Find("spawnPoint").transform.position, 
								Quaternion.identity);
		bullit.GetComponent(Rigidbody).AddForce(transform.forward*2000);
	}
	
}