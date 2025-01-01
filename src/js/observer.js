const descriptionGroup = document.querySelectorAll('.description__group');

const descriptionElementObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
            
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.4 
});

descriptionGroup.forEach(group => {
    const descriptionGroupContentArr = [...group.querySelectorAll('.description__group-content')];
    descriptionGroupContentArr.forEach(element => {
        descriptionElementObserver.observe(element);
    });
});