function SubmitButton()
		{

			var x=document.getElementById("name").value;
			var errMsg=document.getElementById("err");
			
			if(x=="")
			{
				
				errMsg.innerHTML="UserName no t empty";
				return false;
				//alert("can't be empty");
			}
			/*else if(x.length<7 || x.length>15)
			{
				
				
				errMsg.innerHTML="UserName must be  more than 7 and less than 15 characters";
				return false;
				//alert("UserName must be  more than 7 and less than 15 characters")
			}*/
			else if(!x.startsWith("Md"))
			{
				errMsg.innerHTML="UserName must start with Md";
				return false;

			}
			else
			{
				alert(x);
				return false;
				//alert(x.length);
			}

		}