using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace Blok2Toets
{
    public abstract class Element
    {
        public enum ElemType { Air, Fire, Earth, Water }
        protected ElemType primaryElement, secondaryElement;
    }
    public class Air : Element
    {
        public Air()
        {
            primaryElement = ElemType.Air;
        }
    }
    public class Fire : Element
    {
        public Fire()
        {
            primaryElement = ElemType.Fire;
        }
    }
    public class Earth : Element
    {
        public Earth()
        {
            primaryElement = ElemType.Earth;
        }
    }
    public class Water : Element
    {
        public Water()
        {
            primaryElement = ElemType.Water;
        }
    }
}
