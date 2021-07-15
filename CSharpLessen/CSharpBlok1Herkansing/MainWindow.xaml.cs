using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace CSharpBlok1Herkansing
{
    public partial class MainWindow : Window
    {
        private bool outputted = false;

        Line breedteLangLine = new Line();
        Line breedteKortLine = new Line();
        Line diepteLangLine = new Line();
        Line diepteKortLine = new Line();
        public MainWindow()
        {
            InitializeComponent();
        }
        private void calculateButton_Click(object sender, RoutedEventArgs e)
        {
            int breedteLang;
            int breedteKort;
            int diepteLang;
            int diepteKort;
            breedteLang = Convert.ToInt32(breedteLangInput.Text);
            breedteKort = Convert.ToInt32(breedteKortInput.Text);
            diepteLang = Convert.ToInt32(diepteLangInput.Text);
            diepteKort = Convert.ToInt32(diepteKortInput.Text);

            if (outputted == true)
            {
                calculatedCanvas.Children.Clear();
                outputted = false;
                calculateButton.Content = "Calculate";
                return;
            }
            calculateButton.Content = "Clear";
            outputted = true;
            calculatedCanvas.Children.Add(breedteLangLine);
            calculatedCanvas.Children.Add(breedteKortLine);
            calculatedCanvas.Children.Add(diepteLangLine);
            calculatedCanvas.Children.Add(diepteKortLine);

            breedteKortLine.X1 = 10; breedteKortLine.Y1 = 10;
            breedteKortLine.X2 = breedteKort; breedteKortLine.Y2 = 10;
            breedteKortLine.Stroke = new SolidColorBrush(Colors.Black);

            diepteLangLine.X1 = 10; diepteLangLine.Y1 = diepteLang;
            diepteLangLine.X2 = 10; diepteLangLine.Y2 = 10;
            diepteLangLine.Stroke = new SolidColorBrush(Colors.Black);

            //breedteLangLine.X1 = 
        }
    }
}
