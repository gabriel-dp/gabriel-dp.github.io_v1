function goTo (ref) {
    ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
}

export default goTo;