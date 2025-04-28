from ignis.widgets import Widget
from ignis.services.backlight import BacklightService

backlight = BacklightService.get_default()


class MaterialBrightnessSlider(Widget.Scale):
    def __init__(self):
        super().__init__(
            max = backlight.max_brightness,
            value=backlight.bind("brightness"),
            css_classes=["material-slider"],
            hexpand=True,
            step=5,
        )
