import React from "react";

const Content = ({ items }) => {
  const isLoading = !Object.keys(items).length;

  console.log(items);

  return (
    <div>
      {isLoading === false ? (
        Array(items).map(({ data }) => (
          <div className="content" key={data.pageid}>
            <div className="main-content">
              <h1>{data.title}</h1>

              <div
                className="main-content-text"
                dangerouslySetInnerHTML={{ __html: data.extract_html }}
              />
            </div>

            <div className="right-sidebar">
              <div className="sidebar-photo">
                {data.originalimage && (
                  <img src={data.originalimage.source} alt={data.title} />
                )}
              </div>

              <p>
                {data.description && (
                  <div>
                    <span>Description:</span> {data.description}
                  </div>
                )}
              </p>

              <p>
                {data.coordinates && (
                  <div>
                    <span>Coordinates:</span>
                    {data.coordinates.lat}
                    {data.coordinates.lon}
                  </div>
                )}
              </p>

              {/* <p>
                {data.timestamp && (
                  <div>
                    <span>time stamp:</span>
                    {data.coordinates.timestamp}
                  </div>
                )}
              </p> */}
            </div>
          </div>
        ))
      ) : (
        <h1>Search...</h1>
      )}
    </div>
  );
};

export default Content;
