import { useEffect, useState } from "react";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
      display: "block",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
      color: "#fff",
    },
  },
};
const PhoneBookForm = (props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState([]);
  const formDatabase = (data) => {
    data.preventDefault();
    setFormData([...formData, [fName, lName, phone]]);
  };
  useEffect(() => {
    const newData= formData.sort(function(a, b) {
      return a[1].localeCompare(b[1]);
    });
    props.setTransfer(newData);
  });
  return (
    // #TODO Ok the solution will be to organize the input so that each of the lines will have its own name, tag will probably suffice
    <form style={style.form.container} onSubmit={formDatabase}>
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        value={fName}
        onChange={(e) => {
          setFName(e.target.value);
        }}
      />

      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        value={lName}
        onChange={(e) => {
          setLName(e.target.value);
        }}
      />

      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />

      {/* Submit Button */}
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
};

const InformationTable = (props) => {
  console.log(props.transfer, "Look at this one")
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={style.tableCell}>Coder</td>
          <td style={style.tableCell}>Byte</td>
          <td style={style.tableCell}>+52 6600000000</td>
        </tr>
      </tbody>
      {props.transfer === undefined || props.transfer.length === 0 ? (
        <br/>
      ) : (
        props.transfer.map((data) => {
          return (
            <thead>
              <tr>
                <th style={style.tableCell}>{data[0]}</th>
                <th style={style.tableCell}>{data[1]}</th>
                <th style={style.tableCell}>{data[2]}</th>
              </tr>
            </thead>
          );
        })
      )}
    </table>
  );
  // #TODO For this you will probably have to create a userstate so that you can start including the information from the form and append it to this list by i guess following the same format? unsure if that would be the best way to code it.
  //  #TODO A usehook will probably be used so that the userstate is constantly being checked whenever its being updated or changed. Maybe can also do it so that it does it when you first turn on the information? wait idk.
};

const App = () => {
  const [transfer, setTransfer] = useState();
  console.log(transfer);
  return (
    <section>
      <PhoneBookForm setTransfer={setTransfer} />
      <hr />
      <InformationTable transfer={transfer} />
    </section>
  );
};

export default App;

// {
//   props.transfer.map((data) => {
//     return (
//       <thead>
//         <tr>
//           <th style={style.tableCell}>{data[0]}</th>
//           <th style={style.tableCell}>{data[1]}</th>
//           <th style={style.tableCell}>{data[2]}</th>
//         </tr>
//       </thead>
//     );
//   });
// }
