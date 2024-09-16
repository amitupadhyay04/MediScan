import React from 'react';
import './Dashboard.css'; // For styles, add your CSS here

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col">
        {/* Sidebar */}
        <div className="vertical-nav panel_color" id="sidebar">
          <div className="py-4 px-3 mb-4">
            <div className="media d-flex align-items-center">
              <img
                src="/static/pfp.png"
                alt="Profile"
                width="65"
                height="65"
                className="mr-3 rounded-circle img-thumbnail shadow-sm"
              />
              <div className="media-body">
                <p
                  className="m-0"
                  style={{
                    color: '#515b9d',
                    marginBottom: '0px',
                    marginLeft: '20px',
                    marginTop: '-97px',
                    fontSize: '90%',
                  }}
                >
                  <b> John Doe </b>
                </p>
              </div>
            </div>
          </div>

          <ul className="nav flex-column mb-0">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <p
                  style={{
                    color: 'rgb(112, 112, 112)',
                    marginBottom: '0px',
                    marginLeft: '30px',
                    fontSize: '88%',
                  }}
                >
                  <i className="fa fa-th-large mr-3 fa-fw" style={{ color: '#515b9d' }}></i>
                  &nbsp; Upload
                </p>
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <p
                  style={{
                    color: 'rgb(112, 112, 112)',
                    marginBottom: '0px',
                    marginLeft: '30px',
                    fontSize: '88%',
                  }}
                >
                  <i className="fa fa-th-large mr-3 fa-fw" style={{ color: '#515b9d' }}></i>
                  &nbsp; Account
                </p>
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                <p
                  style={{
                    color: 'rgb(112, 112, 112)',
                    marginBottom: '0px',
                    marginLeft: '30px',
                    fontSize: '88%',
                  }}
                >
                  <i className="fa fa-th-large mr-3 fa-fw" style={{ color: '#515b9d' }}></i>
                  &nbsp; Logout
                </p>
              </a>
            </li>
          </ul>
        </div>
        {/* End Sidebar */}

        {/* Page Content */}
        <div className="page-content p-5" id="content">
          <div className="container py-5 display-4">
            <p style={{ color: '#515b9d', marginBottom: '0px', marginLeft: '20px', fontSize: '50%' }}>
              Hello John Doe
            </p>
            <p
              style={{
                color: 'rgb(112, 112, 112)',
                marginBottom: '0px',
                marginLeft: '20px',
                marginTop: '-58px',
                fontSize: '28%',
              }}
            >
              Have a nice day at work!
            </p>

            {/* Prescription Section */}
            <div className="div12">
              <p style={{ marginLeft: '50px', marginTop: '15px', color: '#515b9d', fontSize: '15px' }}>
                Prescription 1
              </p>
              <p style={{ marginLeft: '50px', marginTop: '-10px', color: '#515b9d', fontSize: '12px' }}>
                25/12/22 12:00 pm
              </p>
              <form>
                <button type="submit" className="btn lightpurple four1">
                  <p style={{ color: '#515b9d', marginBottom: '0px', fontSize: '70%' }}>View</p>
                </button>
              </form>
              <form>
                <button type="submit" className="btn lightgreen five1">
                  <p style={{ color: 'rgb(31, 110, 82)', marginBottom: '0px', fontSize: '70%' }}>Delete</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
