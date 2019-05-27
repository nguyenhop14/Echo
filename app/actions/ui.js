import * as types from '../constant/action_constant';
// hiện thị phân tích
export function showAnalyzer() {
  return {
    type: types.SHOW_ANALYZER,
  };
}
// ẩn phân tích
export function hideAnalyzer() {
  return {
    type: types.HIDE_ANALYZER,
  };
}
// chỉnh sửa phương thức
export function toggleModal() {
  return {
    type: types.TOGGLE_MODAL,
  };
}

export function toggleTrackDropDown(id, where) {
  return {
    type: types.TOGGLE_TRACK_DROPDOWN,
    dropDown: { activeId: id, where },
  };
}
// chỉnh sửa hàng
export function toggleQueue() {
  return {
    type: types.TOGGLE_QUEUE,
  };
}

export function slideInRight() {
  return {
    type: types.SLIDE_IN_RIGHT,
  };
}

export function resetSlideInRight() {
  return {
    type: types.RESET_SLIDE_IN_RIGHT,
  };
}

export function startDownloading(id) {
  return {
    type: types.START_DOWNLOADING,
    id,
  };
}

export function updateDownloadProgress(percent) {
  return {
    type: types.UPDATE_DOWNLOAD_PROGRESS,
    percent,
  };
}

export function finishDownloading() {
  return {
    type: types.FINISH_DOWNLOADING,
  };
}

export function startLoading() {
  return {
    type: types.START_LOADING,
  };
}

export function finishLoading() {
  return {
    type: types.FINISH_LOADING,
  };
}

export function startFading() {
  return {
    type: types.START_FADING,
  };
}

export function stopFading() {
  return {
    type: types.STOP_FADING,
  };
}
