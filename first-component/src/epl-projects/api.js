// const host = "https://apireview.dev.eplan.global";

export const apiGetProjects = async ({ host, token }) => {
  try {
    const url = `${host}/projectStoreService/v1.0/projects`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const json = await response.json();

    return json.projectInfos ? json.projectInfos : [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const apiGetFolder = async ({ host, token }) => {
  try {
    const url = `${host}/projectStoreService/v1.0/folders`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const json = await response.json();

    return json;
  } catch (err) {
    console.error(err);
    return [];
  }
};
