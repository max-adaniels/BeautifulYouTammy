document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('share-btn');

    if (!shareButton) return;

    shareButton.addEventListener('click', async () => {
        const shareData = {
            title: 'Beautiful You PE',
            text: 'Book your premium beauty services in Walmer, Gqeberha',
            url: window.location.href
        };

        if (navigator.share) {
            // Mobile-friendly share popup
            try {
                await navigator.share(shareData);
                console.log('Content shared successfully');
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else if (navigator.clipboard) {
            // Fallback for desktop: copy link to clipboard
            try {
                await navigator.clipboard.writeText(shareData.url);
                alert('Link copied to clipboard! Share it anywhere.');
            } catch (err) {
                alert('Unable to share or copy link. Please manually copy the URL.');
                console.error('Clipboard error:', err);
            }
        } else {
            // Super fallback if clipboard API isn’t available
            prompt('Copy this link to share:', shareData.url);
        }
    });
});