const host = "https://apireview.dev.eplan.global";

export const apiGetProjects = async () => {
  try {
    const url = `${host}/projectStoreService/v1.0/projects`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: accessToken,
      },
    });
    const json = await response.json();

    return json.projectInfos ? json.projectInfos : [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const apiGetFolder = async () => {
  try {
    const url = `${host}/projectStoreService/v1.0/folders`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: accessToken,
      },
    });
    const json = await response.json();

    return json;
  } catch (err) {
    console.error(err);
    return [];
  }
};
