import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

function UserList() {
  const [userlist, setUserlist] = useState([]);

  useEffect(() => {
    axios
      .get("http://3.6.93.159:7883/machstatz/get_all_users")
      .then(function (response) {
        setUserlist(response.data);
      });
  }, []);

  const handleDelete = async (emailid) => {
    await axios
      .delete(`http://3.6.93.159:7883/machstatz/delete_existing_user?email=${emailid}`)
      .then(function (response) {
        let updatedUserList = userlist.filter(item => item.email != emailid);
        setUserlist(updatedUserList);
      })
      .catch(function (error) {
        throw new Error(error)
      });

  };

  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleEdit = (id) => {};

  return (
    <div className="userlists_wrapper">
      {userlist.map((item) => {
        let first_name = item.fist_name;
        let first_char = "";
        if (first_name != null || first_name != undefined) {
          first_char = first_name.charAt(0);
        } else {
          first_char = "U";
        }
        return (
          <Card className="userlists" key={item.username}>
            <Card.Header className="userlist_edit">
              <i
                className="fa fa-pencil edit_icon"
                aria-hidden="true"
                onClick={() => handleEdit(item._id.$oid)}
              ></i>
              <i
                className="fa fa-trash delete_icon"
                aria-hidden="true"
                onClick={() => handleDelete(item.email)}
              ></i>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <span
                  className="user_name"
                  style={{ backgroundColor: getRandomColor() }}
                >
                  {first_char}
                </span>
                {item.fist_name} {item.last_name}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default UserList;
