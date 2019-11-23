// remove WYSIWYG

document.addEventListener("DOMContentLoaded", function() {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(_ => {
      // WYSIWYG切り替えボタンが表示されていたらオフにする
      if (document.querySelector('[data-qa="texty_composer_button"]') != null) {
        slackDebug.clientStore.workspaces.getAllWorkspaces().forEach(id => {
          const { redux } = slackDebug[id];
          const {
            wysiwyg_composer,
            wysiwyg_composer_ios,
            wysiwyg_composer_webapp,
            ...payload
          } = redux.getState().experiments;

          redux.dispatch({
            type: "[19] Bulk add experiment assignments to redux",
            payload
          });
        });
      }
    });
  });

  const config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  };

  const target = document.querySelector("body");

  observer.observe(target, config);
});
