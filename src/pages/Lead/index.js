import React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
export default function Lead() {
  //Column_1 Reapeater
  const [columnList_1, setPositionList_1] = useState([
    { qualification: "", passing: "", percentage: "", description: "" },
  ]);
  const removePositions_1 = (index) => {
    document.getElementById(`${index}`).remove();
  };
  const columnRepeater_1 = () => {
    setPositionList_1([
      ...columnList_1,
      { qualification: "", passing: "", percentage: "", description: "" },
    ]);
  };

  //Column_2 Reapeater
  const [columnList_2, setPositionList_2] = useState([
    { qualification: "", passing: "", percentage: "", description: "" },
  ]);
  const removePositions_2 = (index) => {
    document.getElementById(`${index}`).remove();
  };
  const columnRepeater_2 = () => {
    setPositionList_2([
      ...columnList_2,
      { qualification: "", passing: "", percentage: "", descriptio: "" },
    ]);
  };

  //Column_3 Reapeater
  const [columnList_3, setPositionList_3] = useState([
    { qualification: "", passing: "", percentage: "", description: "" },
  ]);
  const removePositions_3 = (index) => {
    document.getElementById(`${index}`).remove();
  };
  const columnRepeater_3 = () => {
    setPositionList_3([
      ...columnList_3,
      { qualification: "", passing: "", percentage: "", description: "" },
    ]);
  };

  return (
    <Container component="main" maxWidth="xl">
      {/*<form method="POST">*/}
      <Box
        sx={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="content d-flex flex-column flex-column-fluid pt-0">
          <div className="row">
            <div className="col-sm-8">
              <table cellpadding="10" cellspacing="10">
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                </tr>

                <tr>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      placeholder="First Name"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="mname"
                      placeholder="Middle Name"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="lname"
                      placeholder="Last Name"
                    />
                  </td>
                </tr>

                <tr>
                  <th>Mobile</th>
                  <th>Address</th>
                  <th>Select Branch</th>
                </tr>

                <tr>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      placeholder="First Name"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="mname"
                      placeholder="Middle Name"
                    />
                  </td>
                  <td>
                    <select className="form-control">
                      <option selected="selected" disabled="disableds">
                        Select Option
                      </option>
                      <option value="1">1</option>
                      <option value="1">1</option>
                      <option value="1">1</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <th>Passport No.</th>
                  <th>Work Duration</th>
                  <th>Lead Source</th>
                </tr>

                <tr>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      placeholder="Passport No."
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="mname"
                      placeholder="Work Duration"
                    />
                  </td>
                  <td>
                    <select className="form-control">
                      <option selected="selected" disabled="disableds">
                        Select Option
                      </option>
                      <option value="1">1</option>
                      <option value="1">1</option>
                      <option value="1">1</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <th colspan="3">Other Info:</th>
                </tr>

                <tr>
                  <th>Qualification</th>
                  <th>Passing Year</th>
                  <th>percentage</th>
                  <th>Description</th>
                </tr>
                {columnList_1.map((element, i) => (
                  <tr key={`${i}_pos_1`} id={`${i}_pos_1`}>
                    <td>
                      <select className="form-control">
                        <option selected="selected" disabled="disableds">
                          Select Option
                        </option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        name="datepicker"
                        id="datepicker"
                      />
                    </td>
                    <td>
                      <select className="form-control">
                        <option selected="selected" disabled="disableds">
                          Select Option
                        </option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="textarea"
                        name="description"
                        placeholder="Type Description..."
                        className="form-control"
                      />
                    </td>
                    <td>
                      {i === 0 ? (
                        <span>
                          <button onClick={columnRepeater_1}>+</button>
                        </span>
                      ) : (
                        columnList_1.length !== 1 && (
                          <button
                            onClick={() => removePositions_1(`${i}_pos_1`)}
                          >
                            -
                          </button>
                        )
                      )}
                    </td>
                  </tr>
                ))}

                <tr>
                  <th>Visa Type</th>
                  <th>Reason</th>
                  <th>Country</th>
                  <th>Remarks</th>
                </tr>
                {columnList_2.map((element, i) => (
                  <tr key={`${i}_pos_2`} id={`${i}_pos_2`}>
                    <td>
                      <select className="form-control">
                        <option selected="selected" disabled="disableds">
                          Select Option
                        </option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="mname"
                        placeholder="Reason"
                      />
                    </td>
                    <td>
                      <select className="form-control">
                        <option selected="selected" disabled="disableds">
                          Select Option
                        </option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="textarea"
                        name="description"
                        placeholder="Type Description..."
                        className="form-control"
                      />
                    </td>
                    <td>
                      {i === 0 ? (
                        <span>
                          <button onClick={columnRepeater_2}>+</button>
                        </span>
                      ) : (
                        columnList_2.length !== 1 && (
                          <button
                            onClick={() => removePositions_2(`${i}_pos_2`)}
                          >
                            -
                          </button>
                        )
                      )}
                    </td>
                  </tr>
                ))}

                <tr>
                  <th>Visa Refusales</th>
                  <th>Reason</th>
                  <th>Country</th>
                  <th>Remarks</th>
                </tr>
                {columnList_3.map((element, i) => (
                  <tr key={`${i}_pos_3`} id={`${i}_pos_3`}>
                    <td>
                      <select className="form-control">
                        <option selected="selected" disabled="disableds">
                          Select Option
                        </option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="mname"
                        placeholder="Reason"
                      />
                    </td>
                    <td>
                      <select className="form-control">
                        <option selected="selected" disabled="disableds">
                          Select Option
                        </option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="textarea"
                        name="description"
                        placeholder="Type Description..."
                        className="form-control"
                      />
                    </td>
                    <td>
                      {i === 0 ? (
                        <span>
                          <button onClick={columnRepeater_3}>+</button>
                        </span>
                      ) : (
                        columnList_3.length !== 1 && (
                          <button
                            onClick={() => removePositions_3(`${i}_pos_3`)}
                          >
                            -
                          </button>
                        )
                      )}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
        {/* <input type="submit" value="SUBMIT" className="button" /> */}
        <button>Submit</button>
        {/*</form>*/}
      </Box>
    </Container>
  );
}
