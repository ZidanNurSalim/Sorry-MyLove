
        // Floating hearts animation
        function createHearts() {
            const heartsContainer = document.getElementById('hearts-container');
            const heartCount = 30;
            
            for (let i = 0; i < heartCount; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    heart.innerHTML = '❤️';
                    heart.style.left = `${Math.random() * 100}vw`;
                    heart.style.top = `${Math.random() * 100}vh`;
                    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
                    heart.style.animationDuration = `${Math.random() * 6 + 3}s`;
                    heartsContainer.appendChild(heart);
                    
                    // Animate hearts falling
                    heart.style.animation = `hearts-fall ${Math.random() * 10 + 5}s linear infinite`;
                    heart.style.animationDelay = `${Math.random() * 5}s`;
                }, i * 300);
            }
        }
        
        // Update date
        function updateDate() {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('tanggal-hari-ini').textContent = now.toLocaleDateString('id-ID', options);
            document.getElementById('tahun-sekarang').textContent = now.getFullYear();
        }
        
        // Love meter animation
        function animateLoveMeter() {
            const meterBar = document.getElementById('love-meter-bar');
            const percentage = document.getElementById('love-percentage');
            const updateBtn = document.getElementById('update-love-btn');
            
            let currentPercentage = 100;
            
            updateBtn.addEventListener('click', () => {
                const randomIncrease = Math.random() * 20;
                currentPercentage = Math.min(100, currentPercentage + randomIncrease);
                
                meterBar.style.width = `${currentPercentage}%`;
                meterBar.querySelector('.meter-value').textContent = `${Math.round(currentPercentage)}%`;
                percentage.textContent = `${Math.round(currentPercentage)}%`;
                
                // Animate the number
                percentage.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    percentage.style.transform = 'scale(1)';
                }, 300);
            });
        }
        
        // Memory modal
        function setupMemoryModal() {
            const modal = document.getElementById('memory-modal');
            const btn = document.getElementById('add-memory-btn');
            const closeBtn = document.getElementById('close-memory-modal');
            const saveBtn = document.getElementById('save-memory-btn');
            const memoryGrid = document.getElementById('memory-grid');
            
            btn.addEventListener('click', () => {
                modal.style.display = 'flex';
                document.getElementById('memory-date').valueAsDate = new Date();
            });
            
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
            
            saveBtn.addEventListener('click', () => {
                const date = document.getElementById('memory-date').value;
                const title = document.getElementById('memory-title').value;
                const desc = document.getElementById('memory-desc').value;
                const imgUrl = document.getElementById('memory-img').value;
                
                if (title && desc) {
                    const dateObj = new Date(date);
                    const dateStr = dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
                    
                    const memoryCard = document.createElement('div');
                    memoryCard.className = 'memory-card';
                    memoryCard.innerHTML = `
                        <img src="${imgUrl}" alt="${title}" class="memory-image">
                        <div class="memory-details">
                            <div class="memory-date">${dateStr}</div>
                            <div class="memory-title">${title}</div>
                            <div class="memory-description">${desc}</div>
                        </div>
                    `;
                    
                    memoryGrid.appendChild(memoryCard);
                    modal.style.display = 'none';
                    
                    // Reset form
                    document.getElementById('memory-title').value = '';
                    document.getElementById('memory-desc').value = '';
                    document.getElementById('memory-img').value = 'https://placehold.co/600x400';
                } else {
                    alert('Silakan isi judul dan deskripsi kenangan');
                }
            });
            
            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
        
        // Personalize modal
        function setupPersonalizeModal() {
            const modal = document.getElementById('personalize-modal');
            const btn = document.getElementById('personalize-btn');
            const closeBtn = document.getElementById('close-personalize-modal');
            const saveBtn = document.getElementById('save-personalize-btn');
            
            btn.addEventListener('click', () => {
                modal.style.display = 'flex';
            });
            
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
            
            saveBtn.addEventListener('click', () => {
                const yourImg = document.getElementById('your-img').value;
                const partnerImg = document.getElementById('partner-img').value;
                const yourName = document.getElementById('your-name').value;
                const coupleName = document.getElementById('couple-name').value;
                
                if (yourImg) {
                    document.getElementById('gambar-saya').src = yourImg;
                }
                
                if (partnerImg) {
                    document.getElementById('gambar-kamu').src = partnerImg;
                }
                
                if (yourName) {
                    document.getElementById('nama-pasangan').textContent = yourName;
                }
                
                if (coupleName) {
                    document.querySelector('title').textContent = coupleName;
                    document.querySelector('h1').textContent = coupleName;
                }
                
                modal.style.display = 'none';
            });
            
            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
        
        // Initialize everything
        document.addEventListener('DOMContentLoaded', () => {
            createHearts();
            updateDate();
            animateLoveMeter();
            setupMemoryModal();
            setupPersonalizeModal();
        });
    