import axios from "axios";

const Downloader = (videoFile) => {
  // setValues({ ...values, error: false, loading: true });
  return axios({
    method: "get",
    url: `${videoFile}`,
  })
    .then(function (response) {
      if (response.status === 200) {
        const { is_video, video_url } = response.data.graphql.shortcode_media;
        if (is_video) {
          console.log(is_video);
          console.log(video_url);
          return axios({
            url: `${video_url}`,
            method: "GET",
            responseType: "blob",
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "file.mp4"); //or any other extension
            document.body.appendChild(link);
            link.click();
          });
        } else {
          console.log(false);
          return false;
        }
      }
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};

export default Downloader;
