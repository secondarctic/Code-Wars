function areYouPlayingBanjo(name) {
    // Implement me
    let e = name.toLowerCase();
    return e[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
  }