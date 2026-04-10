const ctx = document.getElementById('yieldChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['FoodForward SA', 'Rise Hunger', 'Sibanye', 'Cape Flats', 'FTFA'],
    datasets: [{
      label: 'Approx. Yield (kg/month)',
      data: [300, 180, 150, 420, 200],
      backgroundColor: '#2E8B57',
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});